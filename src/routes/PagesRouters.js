import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from "../Components/Loading/Loading";
const LazyAllFoods = lazy(() => import("../Pages/AllFoods"));
const LazyCart = lazy(() => import("../Pages/Cart"));
const LazyCheckout = lazy(() => import("../Pages/Checkout"));
const LazyContact = lazy(() => import("../Pages/Contact"));
const LazyFoodDetails = lazy(() => import("../Pages/FoodDetails"));
const LazyHome = lazy(() => import("../Pages/Home"));
const LazyLogin = lazy(() => import("../Pages/Login"));
const LazyRegister = lazy(() => import("../Pages/Register"));
const PagesRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route
        path="/home"
        element={
          <Suspense fallback={<Loading />}>
            <LazyHome />
          </Suspense>
        }
      />
      <Route
        path="/foods"
        element={
          <Suspense fallback={<Loading />}>
            <LazyAllFoods />
          </Suspense>
        }
      />
      <Route
        path="/foods/:id"
        element={
          <Suspense fallback={<Loading />}>
            <LazyFoodDetails />
          </Suspense>
        }
      />
      <Route
        path="/cart"
        element={
          <Suspense fallback={<Loading />}>
            <LazyCart />
          </Suspense>
        }
      />
      <Route
        path="/checkout"
        element={
          <Suspense fallback={<Loading />}>
            <LazyCheckout />
          </Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <Suspense fallback={<Loading />}>
            <LazyContact />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<Loading />}>
            <LazyLogin />
          </Suspense>
        }
      />
      <Route
        path="/resgister"
        element={
          <Suspense fallback={<Loading />}>
            <LazyRegister />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default PagesRouters;
