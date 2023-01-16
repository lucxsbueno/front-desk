import { useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

const RouteWithoutIndex = props => {
  const { to } = props;
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      return navigate(to);
    }

    // eslint-disable-next-line
  }, []);

  return null;
}

export default RouteWithoutIndex;