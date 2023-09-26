import React, {ReactNode} from "react";
import { getServerSession } from "next-auth";

interface Props {
    children: ReactNode;
}

export default async function PrivateLayout({ children }: Props) {
    const session = await getServerSession();
    console.log(session);
    if (!session) {
        return (
            <div>
                <h1>Access Denied</h1>
            </div>
        );
    }
    return <div>{children}</div>;
}