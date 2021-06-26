
export default (blogs = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;

        case 'CREATE':
            return [...blogs, action.payload];

        case 'DELETE':
            return blogs.filter((blog) => blog._id != action.payload);

        default:
            return blogs;
    }
}