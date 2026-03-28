package com.lyca.mobile.core.models;

import java.util.List;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
        adaptables = {Resource.class, SlingHttpServletRequest.class},
        resourceType = "lyca-mobile/components/faq",
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
        adapters = {FAQModel.class, ComponentExporter.class}
)
@Exporter(
        name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
        extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class FAQModel implements ComponentExporter{

    /** FAQ Title */
    @ValueMapValue(name = "faqTitle")
    private String faqTitle;

    /** FAQs Multifield */
    @ChildResource(name = "faqs")
    private List<FaqItem> faqs;

    public String getFaqTitle() {
        return faqTitle;
    }

    public List<FaqItem> getFaqs() {
        return faqs;
    }

    @Override
    public String getExportedType() {
        return "lyca-mobile/components/faq";
    }

    /* ================= Inner Model for FAQ Item ================= */

    @Model(
            adaptables = Resource.class,
            defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
    )
    public static class FaqItem {

        @ValueMapValue
        private String question;

        @ValueMapValue
        private String answer;

        public String getQuestion() {
            return question;
        }

        public String getAnswer() {
            return answer;
        }
    }
}

