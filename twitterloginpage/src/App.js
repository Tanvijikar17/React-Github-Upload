import "./App.css";

function App() {
    return(
        <div classname="App">
            <div className="logo-box">
                <img src="./twitter.png" alt="logo" className="logo"></img>
                <h2>Sign In to twitter</h2>
                <button>
                    <img src="./google.png" alt="google"></img>
                    Sign in with Google
                </button>
                <button>
                    <img src="./apple.jpg" alt="apple"></img>
                    Sign in with Google
                </button>

                <hr></hr>
                <span>Or</span>

                <form>
                    <input type="text" placeholder="Email, Phone  or Username"></input>
                    <button>Next</button>
                </form>

                <button>Forget your Password</button>
                <p>Don't have and account? <a>Sign Up</a> </p>

            </div>
        </div>
    )
}
export default App;

