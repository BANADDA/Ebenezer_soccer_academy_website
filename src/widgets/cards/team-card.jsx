import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function TeamCard({ img, name, position, text, socials }) {
  return (
    <Card color="transparent" shadow={true} className="text-center pl-3 pr-3 shadow-lg">
      <Avatar
        src={img}
        alt={name}
        size="xxl"
        className="shadow-lg shadow-gray-800/25 h-80 m-0 p-0 w-full flex"
      />
      <Typography variant="h5" color="blue-gray" className="mt-6 mb-1">
        {name}
      </Typography>
      {position && (
        <Typography className="font-mediumtext-blue-gray-600">
          {position}
        </Typography>
      )}
      {text && (
        <Typography className="text-blue-gray-500 font-light">{text}</Typography>
      )}
      {socials && <div className="mx-auto mt-5 text-red-500">{socials}</div>}
    </Card>
  );
}

TeamCard.defaultProps = {
  position: "",
  socials: null,
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  text: PropTypes.string,
  socials: PropTypes.node,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
