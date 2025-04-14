import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const getFood = async (url) => {
    try {
        const foods = await axios.get(url)
        return foods.data.data
    } catch (error) {
        console.log("Error fetching food", error)
        throw error
    }
}