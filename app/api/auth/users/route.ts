import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../../libs/mongodb";
import UserModel from "../../../../models/User";

interface NewUserRequest {
    email: string;
    password: string;
    name: string;
}

interface NewUserResponse {
    id: string;
    email: string;
    name: string;
    role: string
}

type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>;

export const POST = async (req: Request): Promise<NewResponse> => {
    const body = (await req.json()) as NewUserRequest;

    await connectToDatabase();

    const oldUser = await UserModel.findOne({ email: body.email });
    if (oldUser) 
        return NextResponse.json(
            { error: "User already exists" }, 
            { status: 422}
        );
        const user = await UserModel.create({ ...body });

        return NextResponse.json({
            user: {
                id: user._id.toString(),
                email: user.email,
                name: user.name,
                role: user.role
            },
        });
    };


