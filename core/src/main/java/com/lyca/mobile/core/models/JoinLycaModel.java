package com.lyca.mobile.core.models;

import java.util.List;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.Exporter;
import com.adobe.cq.export.json.ExporterConstants;

@Model(
    adaptables = Resource.class,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
    resourceType = "lyca-mobile/components/join-lyca"
)
@Exporter(
    name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
    extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class JoinLycaModel {

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