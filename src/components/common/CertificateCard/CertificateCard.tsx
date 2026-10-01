import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { IoMdRibbon } from "react-icons/io";

import "./CertificateCard.css";

type CertificateCardProps = {
  title: string;
  provider: string;
  certificateUrl: string;
};

const CertificateCard = ({
  title,
  provider,
  certificateUrl,
}: CertificateCardProps) => {
  return (
    <article className="certificateCard">
      <div className="certificateTop">
        <div className="certificateIcon">
          <IoMdRibbon color="red" />
        </div>

        <span className="certificateBadge">Online Course</span>
      </div>

      <div className="certificateContent">
        <h3>{title}</h3>
        <p>Issued by {provider}</p>
      </div>

      <a
        className="outlineBtn"
        href={certificateUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Certificate
        <LuCircleArrowOutUpRight />
      </a>
    </article>
  );
};

export default CertificateCard;
