import User from "./User";

const Comment = (props) => {
  //   const { user, text, date } = props.data;

  // console.log(`props : ${props}`)
  // console.log(`props.data : ${props.data}`)
  return (
    <div className="comment">
      <User user={props.data.user} />
      <p>{props.data.text}</p>
      <time>{props.data.date}</time>
    </div>
  );
};

export default Comment;
