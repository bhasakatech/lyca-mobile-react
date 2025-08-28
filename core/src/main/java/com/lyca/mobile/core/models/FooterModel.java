package com.lyca.mobile.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import java.util.Collections;
import java.util.List;

@Model(
        adaptables = {Resource.class, SlingHttpServletRequest.class},
        adapters = {FooterModel.class, ComponentExporter.class},
        resourceType = FooterModel.RESOURCE_TYPE,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
        name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
        extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class FooterModel implements ComponentExporter {

    static final String RESOURCE_TYPE = "lyca-mobile/components/footer";

    /* -------- Footer Sections (Composite Multifield) -------- */
    @ChildResource(name = "footerSections")
    private List<FooterSection> footerSections;

    /* -------- Lyca on the Go (Composite Multifield) -------- */
    @ChildResource(name = "onTheGo")
    private List<OnTheGoItem> onTheGo;

    /* -------- Signature -------- */
    @ValueMapValue
    private String signatureLogo;

    @ValueMapValue
    private String copyrightText;

    @ChildResource(name = "socialLinks")
    private List<SocialLink> socialLinks;

    // Getters
    public List<FooterSection> getFooterSections() {
        return footerSections != null ? footerSections : Collections.emptyList();
    }

    public List<OnTheGoItem> getOnTheGo() {
        return onTheGo != null ? onTheGo : Collections.emptyList();
    }

    public String getSignatureLogo() {
        return signatureLogo;
    }

    public String getCopyrightText() {
        return copyrightText;
    }

    public List<SocialLink> getSocialLinks() {
        return socialLinks != null ? socialLinks : Collections.emptyList();
    }

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }

    /* ================== Nested Models ================== */

    // Footer section
    @Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
    public static class FooterSection {

        @ValueMapValue
        private String title;

        @ChildResource(name = "links")
        private List<LinkItem> links;

        public String getTitle() {
            return title;
        }

        public List<LinkItem> getLinks() {
            return links != null ? links : Collections.emptyList();
        }
    }

    // Link item (inside a section)
    @Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
    public static class LinkItem {

        @ValueMapValue
        private String label;

        @ValueMapValue
        private String url;

        public String getLabel() {
            return label;
        }

        public String getUrl() {
            return url;
        }
    }

    // On the Go item
    @Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
    public static class OnTheGoItem {

        @ValueMapValue
        private String icon;

        @ValueMapValue
        private String url;

        public String getIcon() {
            return icon;
        }

        public String getUrl() {
            return url;
        }
    }

    // Social Link item
    @Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
    public static class SocialLink {

        @ValueMapValue
        private String icon;

        @ValueMapValue
        private String url;

        public String getIcon() {
            return icon;
        }

        public String getUrl() {
            return url;
        }
    }
}
