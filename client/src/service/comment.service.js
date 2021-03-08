import axios from 'axios'
class CommentService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/comment`,
            withCredentials: true
        })
    }
    getComments = () => this.api.get('/')
    saveComment = commentDetails => this.api.post('/new', commentDetails)
    editComment = (commentId, commentDetails) => this.api.put(`/edit/${commentId}`, commentDetails)
    deleteComment = (commentId) => this.api.delete(`/delete/${commentId}`)
    getUsers = () => this.api.get('/users')
    acceptComment = commentId => this.api.put(`/accept/${commentId}`,) 
}

export default CommentService 