import Controller from "../utils/controller.decorator";
import { Get, Post } from "../utils/handlers.decorator";


const validator = [
    { required: true }
]

const createValidator = {
    content: [
        { required: true },
        { max: 1000 },
    ],
    title: [
        { required: true },
        { max: 255 },
        { min: 100 }
    ]
}

@Controller('/post')
// @Guards(Middleware)
class PostController {
    // @User
    // user: User

    @Get('/')
    // @Middleware()
    // @Validate(validator)
    getPost() {
        //this.user
    }


    // @Post()
    // @Validate(createValidator)
    // addPost(@User() user: User){
    //     this.user
    // }
}