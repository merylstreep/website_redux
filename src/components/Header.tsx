import * as React from "react";

export interface HeaderProps {
    // logo: string;
    // logoAlt: string;
    title: React.ReactNode;
    // subtitle?: React.ReactNode;
    // dark?: boolean;
    // hidePoweredBy?: boolean;
    // titleColor?: string;
    // subtitleColor?: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({
                                                          // logo,
                                                          // logoAlt,
                                                          title,
                                                          // subtitle,
                                                          // dark,
                                                          // hidePoweredBy,
                                                          // titleColor = "brand.text",
                                                          // subtitleColor = "brand.text"
                                                      }) => {
    return (<p></p>
    );
};

export default Header;
