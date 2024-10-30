import ApplicationList from "../UI/ApplicationList";
import useFetch from "../Custom_hooks/useFetch";

const Home = () => {
    const {data: applications, isLoading, Error} = useFetch("");


    return (
        <div className="home">
            <ApplicationList applications={applications} title="Vos candidatures" />
        </div>
    );
}
 
export default Home;