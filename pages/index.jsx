import Image from "next/image";
import PATTERN from "../public/PATTERN.png";
import OBJECT from "../public/OBJECT.svg";
import whatsapp from "../public/whatsapp.svg";
import deve from "../public/deve.svg";
import graph from "../public/graph.svg";
import app from "../public/app.svg";
import seo from "../public/seo.svg";
import sessionShape from "../public/sessionShape.svg";
import check from "../public/check.svg";
import love from "../public/love.svg";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <main className="session-1 container">
        <div>
          <Image
            className="image"
            src={OBJECT}
            alt={" OBJECT ICON ASSAMEDIA WEBSITE"}
          />
          <span>#Meilleure Solution dans une Seule Place</span>
          <h1>
            Une <span>Solution Complète</span>
          </h1>
          <h1> pour votre Entreprise</h1>
          <p>
            Nous sommes des professionnels créatifs qui font des <br />{" "}
            solutions complètes pour le développement réussi de
            <br /> votre entreprsies
          </p>
          <div className="buttomBlock">
            <button type="button" onClick={() => router.push("/Services")}>
              Nos services
            </button>
            <h3>+2126 81 08 98 34</h3>
            <div>
              <Image
                className="image"
                src={whatsapp}
                alt={" whatsapp ICON ASSAMEDIA WEBSITE"}
              />
            </div>
          </div>
        </div>
        <div>
          <Image
            className="image"
            src={PATTERN}
            alt={" PATTERN ICON ASSAMEDIA WEBSITE"}
            placeholder="blur"
            blurDataURL="../public/PATTERN.svg"
          />
        </div>
      </main>
      <main className="session-2 ">
        <div>
          <h1>We're a Digital Agency</h1>
        </div>
      </main>
      <main className="session-3 container">
        <div className="serviceSession">
          <div>
            <div>
              <div className="icon">
                <Image
                  className="image"
                  src={deve}
                  alt={" deve ICON ASSAMEDIA WEBSITE"}
                />
              </div>
              <h5>Web Development</h5>
              <p>
                Nous sommes des professionnels créatifs qui font des solutions
                complètes pour le développement réussi de votre entreprsies
              </p>
            </div>
            <div>
              <div className="icon">
                <Image
                  className="image"
                  src={graph}
                  alt={" deve ICON ASSAMEDIA WEBSITE"}
                />
              </div>
              <h5>Graphic Design</h5>
              <p>
                Nous sommes des professionnels créatifs qui font des solutions
                complètes pour le développement réussi de votre entreprsies
              </p>
            </div>
          </div>
          <div>
            <div className="graphic">
              <div className="icon">
                <Image
                  className="image"
                  src={app}
                  alt={" deve ICON ASSAMEDIA WEBSITE"}
                />
              </div>
              <h5>App Development</h5>
              <p>
                Nous sommes des professionnels créatifs qui font des solutions
                complètes pour le développement réussi de votre entreprsies
              </p>
            </div>
            <div>
              <div className="icon">
                <Image
                  className="image"
                  src={seo}
                  alt={" deve ICON ASSAMEDIA WEBSITE"}
                />
              </div>
              <h5>SEO</h5>
              <p>
                Nous sommes des professionnels créatifs qui font des solutions
                complètes pour le développement réussi de votre entreprsies
              </p>
            </div>
          </div>
        </div>

        <div>
          <span>NOTRE SERVICES</span>
          <h1>EXPERIENCE</h1>
          <h1>ULTIME</h1>
          <p>
            Nous sommes des professionnels créatifs qui font des solutions
            complètes pour le développement réussi de votre entreprsies
          </p>
          <button>Découvrir</button>
        </div>
      </main>
      <main className="session-4 container">
        <div>
          <span>Comment pouvons - nous vous aider</span>
          <h1>Nous vous aidons</h1>
          <h1>à créer le changement</h1>
          <h1>de votre entreprise</h1>
          <div>
            <div className="check">
              <Image
                className="image"
                src={check}
                alt={" PATTERN ICON ASSAMEDIA WEBSITE"}
              />
              <h3>30</h3>
              <p>PROJET COMPLET</p>
            </div>

            <div className="love">
              <Image
                className="image2"
                src={love}
                alt={" PATTERN ICON ASSAMEDIA WEBSITE"}
              />

              <h3>25</h3>
              <p>CLIENTS SATISFAITS</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="image"
            src={sessionShape}
            alt={" PATTERN ICON ASSAMEDIA WEBSITE"}
            placeholder="blur"
            blurDataURL="../public/PATTERN.svg"
          />
        </div>
      </main>
    </>
  );
}
