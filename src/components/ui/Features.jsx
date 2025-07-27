import React, { useRef } from "react";
import { Truck, BadgeCheck, DollarSign, Headset } from "lucide-react";
import { useTranslation } from "react-i18next";
import styles from "./Features.module.css";

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Truck size={40} />,
      title: t("features.fastDelivery"),
    },
    {
      icon: <BadgeCheck size={40} />,
      title: t("features.highQuality"),
    },
    {
      icon: <DollarSign size={40} />,
      title: t("features.affordable"),
    },
    {
      icon: <Headset size={40} />,
      title: t("features.support"),
    },
  ];

  const cubeRefs = useRef([]);
  cubeRefs.current = [];

  const handleMouseMove = (e, ref) => {
    const rect = ref.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (y / rect.height) * -20;
    const rotateY = (x / rect.width) * 20;

    ref.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  };

  const resetRotation = (ref) => {
    ref.style.transform = `rotateY(-30deg) rotateX(20deg)`;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-900 via-purple-900 to-fuchsia-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-12 drop-shadow">
          Why Choose Rasmly
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[5px]">
          {features.map((f, i) => {
            const ref = useRef();
            cubeRefs.current[i] = ref;

            return (
              <div
                key={i}
                className={styles.scene}
                onMouseMove={(e) => handleMouseMove(e, ref.current)}
                onMouseLeave={() => resetRotation(ref.current)}
              >
                <div ref={ref} className={styles.cube}>
                  <div className={`${styles.face} ${styles.front}`}>
                    <div className="flex flex-col items-center gap-3">
                      {f.icon}
                      <span className="text-sm">{f.title}</span>
                    </div>
                  </div>
                  <div className={`${styles.face} ${styles.right}`} />
                  <div className={`${styles.face} ${styles.top}`} />
                  <div className={`${styles.face} ${styles.left}`} />
                  <div className={`${styles.face} ${styles.back}`} />
                  <div className={`${styles.face} ${styles.bottom}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
