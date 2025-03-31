export default function CopyFooter() {
    return (
        <div className="mt-auto w-full text-center py-4">
            <hr className="border-black w-full mx-auto mb-4" />
            <p className="text-center text-xs sm:text-sm md:text-md">Leanne's Collection &copy; Copyright {new Date().getFullYear()}</p>
        </div>
    )
}