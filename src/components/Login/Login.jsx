import HigherOrder from "../HigherOrder/HigherOrder";

const Heading = ({headingText}) => {
    return(
        <>
        <div className="heading">
            <h1 className='text-5xl text-center my-20'><span className='font-semibold'>StartUp</span> <span>{headingText}</span> </h1>
        </div>
        </>
    )
}

const Login = HigherOrder(Heading, "Login");

export default Login;