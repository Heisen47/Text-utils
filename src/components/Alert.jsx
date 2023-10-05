import PropTypes from "prop-types";

function Alert(props) {

    // const capitalize = (value)=>{
        
    //     let values = value.toLowerCase();
    //     return values.charAt(0).toUpperCase() + values.slice(1);
    // }

  return (
    props.alert &&
    
    <div
      className={`alert alert-${props.alert.type} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{(props.alert.type)}</strong> {props.alert.msg}
    </div>
  );
}

export default Alert;


Alert.propTypes = {
    type : PropTypes.string,
    alert : PropTypes.object,
    msg : PropTypes.string
}
