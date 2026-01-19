import { useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const MetaHandler = () => {
    const { t, lang } = useLanguage();

    useEffect(() => {
        // Update Document Title
        document.title = t.seo.title;

        // Update Meta Description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", t.seo.description);
        }

        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", t.seo.title);

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) ogDescription.setAttribute("content", t.seo.description);

        // Update Twitter tags
        const twitterTitle = document.querySelector('meta[property="twitter:title"]');
        if (twitterTitle) twitterTitle.setAttribute("content", t.seo.title);

        const twitterDescription = document.querySelector('meta[property="twitter:description"]');
        if (twitterDescription) twitterDescription.setAttribute("content", t.seo.description);

        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }, [t, lang]);

    return null;
};

export default MetaHandler;
