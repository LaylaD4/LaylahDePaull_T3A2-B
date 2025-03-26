// The Banner component displays a large heading for most pages, using a reusable text prop & borders top & bottom.
export default function Banner({ text }) {
    return (
        <div className="bg-[#FFFFFF] border-t-2 border-b-2 border border-[#868A97] p-4 text-center">
             {/* Heading section – text is responsive for different screen sizes */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-ysabeau text-[#7D8ABD] font-semibold">{text}</h1>
        </div>
    )
}