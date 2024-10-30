const ApplicationList = (props) => {
    const applications = props.applications;
    const title = props.title;

    return (
        <div className="application-list">
            <h2>{title}</h2>
        </div>
    );
}
 
export default ApplicationList;