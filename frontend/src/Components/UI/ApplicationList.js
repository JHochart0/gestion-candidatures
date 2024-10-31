const ApplicationList = (props) => {
    const applications = props.applications;
    const title = props.title;

    return (
        <div className="application-list">
            <h2>{title}</h2>
            {applications.map( (application)=>(
                <div className="blog-preview" key={application.id}>
                    <h2>{ application.companyName }</h2>
                    <p>Candidature envoyée le : {application.applicationDate}</p>
                    <p>État de la réponse : {application.answerState}</p>
                </div>
            ) )}
        </div>
    );
}
 
export default ApplicationList;