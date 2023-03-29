import Link from "next/link";

export default function Footer() {
  return (
    <div className="pt-4 mb-3 text-sm">
      <div className="flex justify-evenly my-2">
        <Link href="/">
          <i className="fa-brands fa-instagram mx-1"></i>
          Instagram
        </Link>
        <Link href="/">
          <i className="fa-brands fa-facebook mx-1"></i>
          Facebook
        </Link>
        <Link href="/">
          <i className="fa-brands fa-linkedin mx-1"></i>
          LinkedIn
        </Link>
        <Link href="/">
          <i className="fa-brands fa-twitter mx-1"></i>
          Twitter
        </Link>
      </div>
      <div className="flex justify-center mt-8">
        <p className="text-xs">Copyright 2023 @JabiraCreates</p>
      </div>
    </div>
  );
}
