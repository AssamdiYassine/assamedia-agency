import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// IMPORT public image
import Logo from "../../public/logoBlack.svg";
import Fr from "../../public/FR.svg";
import Ellipde from "../../public/Ellipse.svg";

function header() {
  const router = useRouter();

  return (
    <div className="Appbar">


    

    <div className="header   container   ">
      <div className="navbar">
        <div className="brand">
          <Link as="/" href="/" passHref>
            <Image
              className="image"
              src={Logo}
              alt={"assamedia agency logo"}
              placeholder="blur"
              blurDataURL="../../public/logoBlack.svg"
            />
          </Link>
        </div>
        <div className="nav">
          <div className="nav-item">
            
            <div className={router.pathname == "/" ? "active" : ""}>
              <Link as="/" href="/" passHref legacyBehavior>
                Home
              </Link>
            </div>
            <div className={router.pathname == "/Services" ? "active" : ""}>
              <Link as="/Services" href="/Services" passHref legacyBehavior>
                Services
              </Link>
            </div>
            <div className={router.pathname == "/Portfolio" ? "active" : ""}>
              <Link as="/Portfolio" href="/Portfolio" passHref legacyBehavior>
                Portfolio
              </Link>
            </div>
            <div className={router.pathname == "/Teams" ? "active" : ""}>
              <Link as="/Teams" href="/Teams" passHref legacyBehavior>
                Teams
              </Link>
            </div>
            <div className={router.pathname == "/About-Us" ? "active" : ""}>
              <Link as="/About-Us" href="/About-Us" passHref legacyBehavior>
                About Us
              </Link>
            </div>
          </div>

          <div className="action ">
            <div className="theme">
              <Image src={Ellipde} alt={"assamedia agency lang"} />
            </div>
            <div className="lang">
              <Image src={Fr} alt={"assamedia agency switch"} />
            </div>
          </div>

          <div className="Contact">
            <button
              className="btnContact"
              type="button"
              onClick={() => router.push("/Contact")}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default header;
