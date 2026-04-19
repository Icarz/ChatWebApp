import { useState } from "react";
import { generateAvatar } from "../utils/generateAvatar";

/**
 * Renders a profile picture. Falls back to a generated initials avatar
 * if src is missing or fails to load.
 *
 * @param {string} src        - profilePic URL from DB
 * @param {string} fullName   - used for the initial letter
 * @param {string} seed       - userName or _id, used to pick a consistent color
 * @param {number} size       - pixel size (width & height)
 * @param {object} style      - extra inline styles
 */
const Avatar = ({ src, fullName, seed, size = 40, style = {} }) => {
  const fallback = generateAvatar(fullName, seed);
  const [imgSrc, setImgSrc] = useState(
    src && !src.startsWith("https://avatar.iran") ? src : fallback
  );

  return (
    <img
      src={imgSrc}
      alt={fullName || "avatar"}
      onError={() => setImgSrc(fallback)}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        objectFit: "cover",
        flexShrink: 0,
        ...style,
      }}
    />
  );
};

export default Avatar;
