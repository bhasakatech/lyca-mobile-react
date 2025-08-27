package com.lyca.mobile.core.models;

import org.apache.sling.api.resource.Resource;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;

import javax.inject.Named;
import java.util.List;

@Model(
    adaptables = {Resource.class ,SlingHttpServletRequest.class},
    adapters = { BlogListModel.class, ComponentExporter.class },
    resourceType = BlogListModel.RESOURCE_TYPE,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
    name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
    extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class BlogListModel implements ComponentExporter {

    public static final String RESOURCE_TYPE = "lyca-mobile/components/blog-list";

    @ValueMapValue
    private String heading;

    @ChildResource(name = "blogs")
    private List<BlogItem> blogs;

    public String getHeading() {
        return heading;
    }

    public List<BlogItem> getBlogs() {
        return blogs;
    }

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }

    // Inner class for each blog card
    @Model(adaptables = Resource.class)
    public static class BlogItem {

        @ValueMapValue
        @Named("blogImage")
        private String blogImage;

        @ValueMapValue
        @Named("blogTitle")
        private String blogTitle;

        @ValueMapValue
        @Named("blogDate")
        private String blogDate;

        @ValueMapValue
        @Named("blogAuthor")
        private String blogAuthor;

        public String getBlogImage() {
            return blogImage;
        }

        public String getBlogTitle() {
            return blogTitle;
        }

        public String getBlogDate() {
            return blogDate;
        }   
    }
}
