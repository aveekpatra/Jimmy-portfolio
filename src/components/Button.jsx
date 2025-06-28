/**
 * Node modules
 */
import PropTypes from "prop-types";
import { ChevronRight } from "lucide-react";

// Icon mapping for common Material symbols to Lucide icons
const iconMap = {
  chevron_right: ChevronRight,
  arrow_forward: ChevronRight,
  arrow_right: ChevronRight,
};

/**
 * Primary Button
 */
const ButtonPrimary = ({ href, target = "_self", label, icon, classes }) => {
  const IconComponent = iconMap[icon];

  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-primary " + classes}>
        {label}

        {IconComponent && (
          <IconComponent size={20} className="ml-2" aria-hidden="true" />
        )}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-primary " + classes}>
        {label}

        {IconComponent && (
          <IconComponent size={20} className="ml-2" aria-hidden="true" />
        )}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

/**
 * Outline Button
 */
const ButtonOutline = ({ href, target = "_self", label, icon, classes }) => {
  const IconComponent = iconMap[icon];

  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-outline " + classes}>
        {label}

        {IconComponent && (
          <IconComponent size={20} className="ml-2" aria-hidden="true" />
        )}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-outline " + classes}>
        {label}

        {IconComponent && (
          <IconComponent size={20} className="ml-2" aria-hidden="true" />
        )}
      </button>
    );
  }
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

export { ButtonPrimary, ButtonOutline };
