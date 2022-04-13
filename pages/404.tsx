import * as React from "react";
import Router from "next/router";
import Loading from "../components/Loading";

const FourOFour: React.FC = () => {
    React.useEffect(() => {
        Router.push("/");
    }, []);

    return <Loading redirecting={true} />;
};

export default FourOFour;
