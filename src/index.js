import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';
import PropTypes from 'prop-types';

// FB Status Container
    // FB Profile Picture
    // Name - Time 
    // Status
    // Like - Comment

const Time = ({time}) => {
    const timeString = moment(time).fromNow();
    return (
        <div className="time">
            {timeString}
        </div>
    );
};
Time.propTypes = {
    time:PropTypes.string.isRequired
}

const ProfilePicture = ({slug}) => {
    var imgUrl= `https://i.imgur.com/${slug}`
    return (
        <img src={imgUrl} className="profilePic" alt="Facebook Profile"/>
    );
}
ProfilePicture.propTypes = {
    slug:PropTypes.object.isRequired
}

const User = ({name}) => (
    <div className="fbUser">
        {name}
    </div>
);
User.propTypes = {
    name:PropTypes.string.isRequired
}

const Status = ({text}) => (
    <div className="fb-text-status">
        {text}
    </div>
);
Status.propTypes = {
    text:PropTypes.string.isRequired
}

const Like = ({like}) => (
    <div className="like-status">
        <span className="like-button">
            <i class="far fa-thumbs-up"/>            
            {like}
        </span>
    </div>
);
Like.propTypes = {
    like:PropTypes.object.isRequired
}

const Comment = ({comment}) => (
    <div className="comment-status">
        {comment}
    </div>
)

const Facebook = ({status}) => (
    <div className="fb-container">
        <ProfilePicture slug={status.avatar}/>
        <div className="user-container">
            <User name={status.name}/>
            <Time time={status.timestamp}/>
        </div>
        <Status text={status.status}/>
        <div className="user-reaction">
            <Like like={status.like}/>
            <Comment comment={status.comment}/>
        </div>
    </div>
)



const facebookStatus = {
    avatar: "pHSdFlP.jpg",
    name: "Muffin",
    timestamp: "2018-02-20 21:24:37",
    status: "I'm a dog, I shouldn't even be here.",
    like: "Like",
    comment: "Comment",
}


ReactDOM.render(<Facebook status={facebookStatus}/>, document.getElementById('root'));
