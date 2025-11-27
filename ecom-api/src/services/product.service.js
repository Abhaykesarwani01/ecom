const Category = require('../models/category.model');
const Product = require('../models/product.model');

async function createProduct(reqData) {
    let topLevel = await Category.findOne({name: reqData.topLavelCategory});
    if (!topLevel) {
        topLevel = new Category({
            name: reqData.topLavelCategory, 
            level: 1,
        });
        await topLevel.save();
    }

    let secondLevel = await Category.findOne({name: reqData.secondLavelCategory, parentCategory: topLevel._id});
    if (!secondLevel) {
        secondLevel = new Category({
            name: reqData.secondLavelCategory, 
            level: 2,
            parentCategory: topLevel._id,
        });
        await secondLevel.save();
    }   

    let thirdLevel = await Category.findOne({name: reqData.thirdLavelCategory, parentCategory: secondLevel._id});
    if (!thirdLevel) {
        thirdLevel = new Category({
            name: reqData.thirdLavelCategory, 
            level: 3,
            parentCategory: secondLevel._id,
        });
        await thirdLevel.save();
    }

    const product = new Product({
        title: reqData.title,
        color: reqData.color,
        description: reqData.description,
        discountedPrice: reqData.discountedPrice,
        discoruntPercent: reqData.discoruntPercent,
        imageUrl: reqData.imageUrl,
        brand: reqData.brand,
        price: reqData.price,
        size: reqData.size,
        quantity: reqData.quantity,
        category: thirdLevel._id,
    });
    return await product.save();
}

async function deleteProduct(productId) {
    const product = await Product.findProductById(productId);

    await Product.findByIdAndDelete(productId);
    return "Product deleted successfully";
}

async function updateProduct(productId, reqData) {
    return await Product.findByIdAndUpdate(productId, reqData);
}

async function findProductById(id) {
    const product = await Product.findById(id).populate('category').exec();
    if (!product) {
        throw new Error('Product not found :'+ id);
    }
    return product;
}

async function getAllProducts(reqQuery) {
    let {category, size, color, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, pageSize } = reqQuery;

    pageSize = pageSize || 10;

    let query = Product.find().populate('category');
    if (category) {
        const existsCategory = await Category.findOne({name: category});
        if (existsCategory) {
            query = query.where('category').equals(existsCategory._id);
        }else {
            return {products: [], currentPage: 1, totalPages: 0};
        }
    }

    if (size) {
        const sizeSet = new Set(size);  //s,m,l,xl
        query.query.where('size').in([...sizeSet]);
    }

    if (color) {
        const colorSet = new Set(color.split(',').map(color => color.trim().toLowerCase()));  //white,black,red
        const colorRegex = colorSet.size>0?new RegExp([...colorSet].join('|'), 'i'):null;
        query = query.where('color').regex(colorRegex);
    }

    if (minPrice && maxPrice) {
        query = query.where('discountedPrice').gte(minPrice).lte(maxPrice);
    }
    
    if (minDiscount) {
        query = query.where('discoruntPercent').gt(minDiscount);
    }

    if (stock) {
        if (stock === 'in_stock') {
            query = query.where('quantity').gt(0);
        } else if (stock === 'out_of_stock') {
            query = query.where('quantity').equals(0);
        }
    }

    if (sort) {
        const sortDirections = sort == 'price_heigh' ? 1 : -1;
        query = query.sort({discountedPrice: sortDirections});
    } 

    const totalProducts = await Product.countDocuments(query);
    
    const skip = (pageNumber - 1) * pageSize;
    query = query.skip(skip).limit(pageSize);
    
    const products = await query.exec();

    const totalPages = Math.ceil(totalProducts / pageSize);

    return {content: products, currentPage: pageNumber, totalPages: totalPages};
}

async function createMultipleProducts(products) {
    for(let product of products){
        await createProduct(product);
    }
    return "Products added successfully";
}

module.exports = {
    createProduct,
    deleteProduct,
    updateProduct,
    findProductById,
    getAllProducts,
    createMultipleProducts,
};