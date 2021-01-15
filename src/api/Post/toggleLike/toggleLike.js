export default {
    Mutation: {
        toggleLike: async(_, args, { request }) => {
            console.log(request);
        }
    }
}