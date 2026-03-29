import { CDN_URL, LOGO_URL } from "../utils/constants";

const ResuarantCard = (props) =>
{
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRatingString,
        sla,costForTwo
    } = resData?.info
    return (
        <div className = "res-card" style={ {
    backgroundColor: "#f0f0f0"
}} >
            <img className = "res-logo" alt="res-logo"   src = {LOGO_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{"Rating - "+ avgRatingString}</h4>
            {/* <p>{costForTwo}</p> */}
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default ResuarantCard;