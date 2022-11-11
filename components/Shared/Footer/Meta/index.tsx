import Head from "next/head";
import React from "react";

type MetaType = {
    title: string;
    desc?: string;
};

function Meta({ title, desc }: MetaType) {
    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} key="title" />
            <meta
                property="og:description"
                content={
                    desc ||
                    "iDreamers is a social app that helps you create, manage, and fulfill your dreams. Success is sweeter"
                }
                key="description"
            />
            <meta
                property="og:image"
                content="https://www.idreamers.com/img/ilogo.svg"
                key="image"
            />
        </Head>
    );
}

export default Meta;
