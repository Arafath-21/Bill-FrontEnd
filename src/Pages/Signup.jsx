import Base from "./Base"
import SignupForm from "../Features/Signup/SignupForm"

function Signup() {
    return (
       <Base title={'Welcome to New Journey'} description={"Management of inventory becomes easy with us"}>
       <SignupForm/>
       </Base>
    )
}

export default Signup
