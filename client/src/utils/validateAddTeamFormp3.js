const validate = values => {
    const errors = {};
    
    if (!values.teamMembers){
        errors.teamMembers = 'Need at least 1 team member';
    }
    return errors;
}
  
export default validate;