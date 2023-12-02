import Counter from "../components/counterapp/counter.jsx";
import AppNavBar from "../components/AppNavBar.jsx";



const counterPages = () => {
    return (
        <div>
            <AppNavBar/>
        <div className="container mt-lg-5">

            <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                    <Counter/>
                </div>
            </div>

        </div>
        </div>

    );
};

export default counterPages;