package com.lyca.mobile.core.models;

import org.apache.sling.api.resource.Resource;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import java.util.List;

@Model(
    adaptables = {Resource.class, SlingHttpServletRequest.class},
    adapters = { CountryCarouselModel.class, ComponentExporter.class },
    resourceType = CountryCarouselModel.RESOURCE_TYPE,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
    name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
    extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class CountryCarouselModel implements ComponentExporter {

    public static final String RESOURCE_TYPE = "lyca-mobile/components/country-carousel";

    @ValueMapValue
    private String heading;

    @ChildResource(name = "countries")
    private List<CountryItem> countries;

    public String getHeading() {
        return heading;
    }

    public List<CountryItem> getCountries() {
        return countries;
    }

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }

    @Model(adaptables = Resource.class
    ,defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
    public static class CountryItem {

        @ValueMapValue
        private String countryName;

        @ValueMapValue
        private String countryFlag;

        public String getCountryName() {
            return countryName;
        }

        public String getCountryFlag() {
            return countryFlag;
        }
    }
}
