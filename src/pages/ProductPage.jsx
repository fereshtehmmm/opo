import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCart } from "../context/CartContext";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ProductPage = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const { addToCart } = useCart();

  const [options, setOptions] = useState({
    size: "",
    material: "",
    quantity: "",
    sides: "single",
    corners: "square",
    file: null,
  });

  const [price, setPrice] = useState(0);

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    if (type === "file") {
      setOptions((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setOptions((prev) => ({ ...prev, [name]: value }));
    }
  };

  useEffect(() => {
    // محاسبه قیمت فرضی
    const basePrice = 1.0;
    let final = basePrice;

    if (options.size === "A5") final += 0.5;
    if (options.size === "A4") final += 1;
    if (options.material === "Glossy") final += 0.5;
    if (options.material === "Matte") final += 1;
    if (options.quantity) final *= parseInt(options.quantity);
    if (options.sides === "double") final += 1;
    if (options.corners === "rounded") final += 0.25;

    setPrice(final);
  }, [options]);

  const handleAddToCart = async () => {
    let fileURL = null;

    if (options.file) {
      const storage = getStorage();
      const fileRef = ref(
        storage,
        `uploads/${Date.now()}_${options.file.name}`
      );
      await uploadBytes(fileRef, options.file);
      fileURL = await getDownloadURL(fileRef);
    }

    const productData = {
      id,
      ...options,
      price: parseFloat(price.toFixed(2)),
      fileURL: fileURL || null,
      fileName: options.file?.name || null,
    };

    addToCart(productData);
    alert(`${id} ${t("product.added")}`);
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6 capitalize">{id.replace(/-/g, " ")}</h1>

      <form className="space-y-4">
        {/* Size */}
        <div>
          <label className="block font-medium mb-1">{t("product.size")}</label>
          <select
            name="size"
            value={options.size}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">{t("product.select")}</option>
            <option value="A5">A5</option>
            <option value="A4">A4</option>
            <option value="A3">A3</option>
          </select>
        </div>

        {/* Material */}
        <div>
          <label className="block font-medium mb-1">{t("product.material")}</label>
          <select
            name="material"
            value={options.material}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">{t("product.select")}</option>
            <option value="Glossy">Glossy</option>
            <option value="Matte">Matte</option>
          </select>
        </div>

        {/* Quantity */}
        <div>
          <label className="block font-medium mb-1">{t("product.quantity")}</label>
          <input
            type="number"
            name="quantity"
            value={options.quantity}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Sides */}
        <div>
          <label className="block font-medium mb-1">{t("product.sides")}</label>
          <div className="flex space-x-4">
            <label>
              <input
                type="radio"
                name="sides"
                value="single"
                checked={options.sides === "single"}
                onChange={handleChange}
              />
              <span className="ml-2">{t("product.single")}</span>
            </label>
            <label>
              <input
                type="radio"
                name="sides"
                value="double"
                checked={options.sides === "double"}
                onChange={handleChange}
              />
              <span className="ml-2">{t("product.double")}</span>
            </label>
          </div>
        </div>

        {/* Corners */}
        <div>
          <label className="block font-medium mb-1">{t("product.corners")}</label>
          <select
            name="corners"
            value={options.corners}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="square">{t("product.square")}</option>
            <option value="rounded">{t("product.rounded")}</option>
          </select>
        </div>

        {/* Upload */}
        <div>
          <label className="block font-medium mb-1">{t("product.upload")}</label>
          <input
            type="file"
            name="file"
            accept=".pdf,.jpg,.png"
            onChange={handleChange}
            className="w-full"
          />
        </div>

        {/* Price + Button */}
        <div className="text-right mt-6">
          <p className="text-lg font-bold mb-2">
            {t("product.price")}: {price.toFixed(2)} OMR
          </p>
          <button
            type="button"
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {t("product.add_to_cart")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductPage;
