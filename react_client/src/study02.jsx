

const user = {
    name: "DaPeng",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 80
};

export default function ShowData() {
    return (
        <>
            <h1>
                {user.name}
            </h1>
            <img src={user.imageUrl}
                alt={
                    'photo of' + user.name
                }
                style={{
                    with: user.imageSize,
                    height: user.imageSize
                }} />
        </>
    )
}