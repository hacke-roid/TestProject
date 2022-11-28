import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setRestlts] = useState([]);

  const searchApi = async () => {
    const response = await rapidapi.get('/search');
    
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={(newResult) => setRestlts(newResult)}
      />
      <Text>Search</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
