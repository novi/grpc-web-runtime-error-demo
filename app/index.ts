import {User} from "../generated/User/User_pb";
import {SomeMessage} from '../generated/OtherPackage/OtherPackage_pb'

const user = new User()
const someMessage = new SomeMessage()

console.log(someMessage.serializeBinary())
console.log(user.serializeBinary())