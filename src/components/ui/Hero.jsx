import { Button } from "./button";
import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css";

const Hero = () => {
  const { t } = useTranslation();

  return (
<section className="relative pb-12 pt-60 px-4 text-white text-center bg-gradient-to-br from-pink-600 via-purple-800 to-indigo-900 overflow-hidden">      {/* توپ‌های متحرک */}
<div className="absolute inset-0 z-0">
  <div className={`${styles.bubble}`} style={{ top: "50%", left: "65%", width: "60px", height: "60px", animationDuration: "3s" }} />
  <div className={`${styles.bubble}`} style={{ top: "30%", left: "25%", width: "50px", height: "50px", animationDuration: "2s" }} />
  <div className={`${styles.bubble}`} style={{ top: "60%", left: "40%", width: "60px", height: "60px", animationDuration: "4s" }} />
  <div className={`${styles.bubble}`} style={{ top: "45%", left: "80%", width: "90px", height: "90px", animationDuration: "2.5s" }} />
  <div className={`${styles.bubble}`} style={{ top: "88%", left: "30%", width: "90px", height: "90px", animationDuration: "2.5s" }} />
  <div className={`${styles.bubble}`} style={{ top: "88%", left: "90%", width: "40px", height: "40px", animationDuration: "2.5s" }} />
  <div className={`${styles.bubble}`} style={{ top: "48%", left: "20%", width: "20px", height: "20px", animationDuration: "2.5s" }} />

</div>


      {/* محتوا */}
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow">
        {t("hero.title")}
      </h1>
      <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
        {t("hero.subtitle")}
      </p>

      {/* دکمه‌ها */}
      <div className="flex justify-center gap-4 flex-wrap z-10 relative">
        <Button variant="gradient">
          {t("hero.order")}
        </Button>
        <Button variant="glass">
          {t("hero.contact")}
        </Button>
      </div>
    </section>
  );
};

export default Hero;