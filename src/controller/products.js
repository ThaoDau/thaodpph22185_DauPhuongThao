import axios from "axios"
import dotenv from 'dotenv'

dotenv.config()
export const getAll = async (req,res)=>{
    try {
        const {data :users} = await axios.get(
            `${process.env.API_URL}users`
        );
        if(users.length === 0){
            return res.status(404).json({
                message: 'khong co san pham nao',
            })
        }
        return res.json(users)
    } catch (error) {
        return res.status(500).json({
            message: 'lay san pham that bai ' + error.message,
            
        })
    }
}
export const getId = async (req,res)=>{
    try {

        const {data :users} = await axios.get(
            `${process.env.API_URL}users/${req.params.id}`,
            req.body
        );
        if(!users){
            return res.status(404).json({
                message: 'khong co san pham nao',
            })
        }
        return res.json(users)
    } catch (error) {
        return res.status(500).json({
            message: 'lay san pham that bai' + error.message,
        })
    }
}
export const create = async (req,res)=>{
    try {

        const {data :users} = await axios.post(
            ` http://localhost:3000/users`,req.body
        );
        if(!users){
            return res.status(500).json({
                message: 'tim san pham khong thanh cong',
            })
        }
        return res.json(users)
    } catch (error) {
        return res.status(400).json({
            message: 'lay san pham that bai' + error.message,
        })
    }
}
export const remove = async (req, res) => {
    try {
        const { data: users } = await axios.delete(
            `http://localhost:3000/users/${req.params.id}`
        );
        if (!users) {
            return res.status(404).json({
                message: "Không tìm thấy ten nguoi dung ",
            });
        }
        return res.json({
            message: "Xóa nguoi dung thanh cong",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi khi xóa nguoi dung : " + error.message,
        });
    }
};

export const update = async (req,res)=>{
    try {

        const {data :users} = await axios.put(
            `${process.env.API_URL}users/${req.params.id}`,req.body
        );
        if(!users){
            return res.status(500).json({
                message: 'tim san pham khong thanh cong',
            })
        }
        return res.json(users)
    } catch (error) {
        return res.status(400).json({
            message: 'lay san pham that bai' + error.message,
        })
    }
}
export const patch = async (req,res)=>{
    try {

        const {data :users} = await axios.patch(
            `${process.env.API_URL}users/${req.params.id}`,req.body
        );
        if(!users){
            return res.status(500).json({
                message: 'tim san pham khong thanh cong',
            })
        }
        return res.json(users)
    } catch (error) {
        return res.status(400).json({
            message: 'lay san pham that bai' + error.message,
        })
    }
}