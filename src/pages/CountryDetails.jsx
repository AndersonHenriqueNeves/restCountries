import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import axios from "axios";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const DetailContainer = styled(Box)({
    background: "#202D36",
    color: "white",
    minHeight: "100vh",
    padding: "20px",
    boxSizing: "border-box",
});

const BackButton = styled(Button)({
    backgroundColor: "#2B3743",
    color: "white",
    marginBottom: "20px",
    textTransform: "none",
    "&:hover": {
        backgroundColor: "#3A474F",
    },
});

const DetailContent = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "20px",
});

const FlagImage = styled("img")({
    width: "100%",
    maxWidth: "500px",
    borderRadius: "8px",
});

const InfoSection = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
});

const InfoItem = styled(Typography)({
    fontSize: "16px",
    lineHeight: "1.5",
});

const BorderCountriesContainer = styled(Box)({
    display: "flex",
    flexDirection: "row", 
    flexWrap: "wrap", // Permite que os botões passem para a próxima linha se necessário.
    gap: "10px",
    marginTop: "20px", 
});

const BorderButton = styled(Button)({
    backgroundColor: "#2B3743",
    color: "white",
    textTransform: "none",
    "&:hover": {
        backgroundColor: "#3A474F",
    },
});

const CountryDetails = () => {
    const { countryCode } = useParams();
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountryDetails = async () => {
            try {
                const response = await axios.get(
                    `https://restcountries.com/v3.1/alpha/${countryCode}`
                );
                setCountry(response.data[0]);
                setLoading(false);
            } catch (erro) {
                setError("Error fetching country details");
                setLoading(false);
            }
        };

        fetchCountryDetails();
    }, [countryCode]);

    if (loading) return <Typography sx={{ color: "white" }}>Loading...</Typography>;
    if (error) return <Typography sx={{ color: "red" }}>{error}</Typography>;

    return (
        <DetailContainer>
            <Link to="/">
                <BackButton
                    variant="contained"
                    startIcon={<KeyboardBackspaceIcon sx={{ color: "white" }} />}
                >
                    Back
                </BackButton>
            </Link>
            {country && (
                <DetailContent>
                    <FlagImage src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
                    <Typography variant="h4" sx={{ marginTop: "20px" }}>
                        {country.name.common}
                    </Typography>
                    <InfoSection>
                        <InfoItem>
                            <strong>Native Name:</strong>{" "}
                            {country.name.nativeName?.[Object.keys(country.name.nativeName)[0]]?.common || "N/A"}
                        </InfoItem>
                        <InfoItem>
                            <strong>Population:</strong> {country.population.toLocaleString()}
                        </InfoItem>
                        <InfoItem>
                            <strong>Region:</strong> {country.region}
                        </InfoItem>
                        <InfoItem>
                            <strong>Sub Region:</strong> {country.subregion || "N/A"}
                        </InfoItem>
                        <InfoItem>
                            <strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}
                        </InfoItem>
                        <InfoItem>
                            <strong>Top Level Domain:</strong>{" "}
                            {country.tld ? country.tld.join(", ") : "N/A"}
                        </InfoItem>
                        <InfoItem>
                            <strong>Currencies:</strong>{" "}
                            {country.currencies
                                ? Object.values(country.currencies)
                                    .map((currency) => currency.name)
                                    .join(", ")
                                : "N/A"}
                        </InfoItem>
                        <InfoItem>
                            <strong>Languages:</strong>{" "}
                            {country.languages
                                ? Object.values(country.languages).join(", ")
                                : "N/A"}
                        </InfoItem>
                    </InfoSection>
                    {country.borders && country.borders.length > 0 && (
                        <BorderCountriesContainer>
                            {country.borders.map((borderCode) => (
                                <Link to={`/country/${borderCode}`} key={borderCode} style={{ textDecoration: "none" }}>
                                    <BorderButton variant="contained">{borderCode}</BorderButton>
                                </Link>
                            ))}
                        </BorderCountriesContainer>
                    )}
                </DetailContent>
            )}
        </DetailContainer>
    );
};

export default CountryDetails;
