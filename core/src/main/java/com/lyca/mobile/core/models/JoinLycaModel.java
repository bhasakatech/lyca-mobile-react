package com.lyca.mobile.core.models;

import java.util.List;
import com.adobe.cq.export.json.ComponentExporter;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.Exporter;
import com.adobe.cq.export.json.ExporterConstants;

@Model(
    adaptables = {Resource.class, SlingHttpServletRequest.class},
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
    resourceType = JoinLycaModel.RESOURCE_TYPE,
        adapters = ComponentExporter.class
)
@Exporter(
    name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
    extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class JoinLycaModel implements ComponentExporter{

    static final String RESOURCE_TYPE="lyca-mobile/components/join-lyca";

    @ValueMapValue
    private String header;

    @ValueMapValue
    private String description;

    @ChildResource(name = "cards")
    private List<Card> cards;

    public String getHeader() {
        return header;
    }

    public String getDescription() {
        return description;
    }

    public List<Card> getCards() {
        return cards;
    }

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }

    @Model(
        adaptables = Resource.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
    )
    public static class Card {
        @ValueMapValue
        private String cardTitle;

        @ValueMapValue
        private String cardImage;

        @ValueMapValue
        private String cardLink;

        public String getCardTitle() {
            return cardTitle;
        }

        public String getCardImage() {
            return cardImage;
        }

        public String getCardLink() {
            return cardLink;
        }
    }
}