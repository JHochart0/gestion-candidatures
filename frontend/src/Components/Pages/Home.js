import ApplicationList from "../UI/ApplicationList";
import useFetch from "../Custom_hooks/useFetch";

const Home = () => {
    const {data: applications, isLoading, error} = useFetch("http://localhost:8000/applications");

   return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isLoading && <div>Chargement...</div> }
            { applications && <ApplicationList applications={applications} title="Vos candidatures" /> }
        </div>
    );
}
 
export default Home;