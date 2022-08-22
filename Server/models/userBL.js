const User = require('./userSchema');

const getAllUsers = async () =>{

    // let data = await User.find({});
    // return data;
    return  User.find({});
}


const getUser = async (id) =>
{
    let data = await User.findById(id);
    return data;
}


const addUser = async (obj) =>
{
    let user = new User({
        name : obj.name,
        email : obj.email,
        street : obj.street,
        city : obj.city,
        zipcode : obj.zipcode,
        tasks : obj.tasks,
        posts : obj.posts
    });

    await user.save();
    return user._id;
}

const updateUser = async (id, obj) =>
{
    console.log(obj)
    await User.findByIdAndUpdate(id,
        {
            name : obj.name,
             email : obj.email,
             street : obj.street,
             city : obj.city,
             zipcode : obj.zipcode,
             tasks : obj.tasks,
             posts : obj.posts
        })
}


const deleteUser = async (id) =>
{
    await User.findByIdAndDelete(id);
}


//const updateUser = async (id,obj) =>
//{
//    await User.findByIdAndUpdate({id : id},
//        {
//            id : obj.id,
//            name : obj.name,
//            email : obj.email,
//            street : obj.street,
//            city : obj.city,
//            zipcode : obj.zipcode,
//            tasks : obj.tasks,
//            posts : obj.posts
//        })
//}





module.exports = {getAllUsers, getUser, addUser, updateUser, deleteUser}