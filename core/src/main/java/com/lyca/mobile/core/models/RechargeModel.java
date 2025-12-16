package com.lyca.mobile.core.models;

import java.util.*;
import javax.annotation.PostConstruct;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.adobe.cq.export.json.ComponentExporter;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.Exporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonInclude;

@Model(
    adaptables = {Resource.class, SlingHttpServletRequest.class},
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
    resourceType = RechargeModel.RESOURCE_TYPE,
        adapters = ComponentExporter.class
)
@Exporter(
    name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
    extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class RechargeModel implements ComponentExporter{

    static final String RESOURCE_TYPE="lyca-mobile/components/recharge";


    /* ================= TEXT FIELDS ================= */
    @ValueMapValue private String title;
    @ValueMapValue private String description;
    @ValueMapValue private String operatorTitle;
    @ValueMapValue private String countryCode;
    @ValueMapValue private String phonePlaceholder;
    @ValueMapValue private String verifyText;
    @ValueMapValue private String plansTitle;
    @ValueMapValue private String topupTitle;
    @ValueMapValue private String paymentTitle;
    @ValueMapValue private String paymentDescription;
    @ValueMapValue private String feeLabel;
    @ValueMapValue private String termsText;
    @ValueMapValue private String ctaText;

    /* ================= CHILD RESOURCES ================= */
    @ChildResource private Resource plans;
    @ChildResource private Resource topupAmounts;

    private Map<String, List<Plan>> plansByTab = new HashMap<>();
    private List<TopupAmount> topUpAmountsList = new ArrayList<>();

    @PostConstruct
    protected void init() {
        // Initialize empty tabs to avoid undefined issues in React
        plansByTab.put("30days", new ArrayList<>());
        plansByTab.put("long", new ArrayList<>());
        plansByTab.put("data", new ArrayList<>());

        buildPlans();
        buildTopups();
    }

    /* ================= BUILDERS ================= */
    private void buildPlans() {
        if (plans == null) return;

        for (Resource item : plans.getChildren()) {
            ValueMap vm = item.getValueMap();

            String rawTab = vm.get("tab", "");
            String tabKey = normalizeTab(rawTab);

            String data = vm.get("data", "");
            String price = vm.get("price", "");
            String validity = vm.get("validity", "");

            if (!data.isEmpty() && !price.isEmpty()) {
                Plan plan = new Plan(data, price, validity);
                plansByTab.get(tabKey).add(plan);
            }
        }
    }

    private void buildTopups() {
        if (topupAmounts == null) return;

        for (Resource item : topupAmounts.getChildren()) {
            ValueMap vm = item.getValueMap();
            String amount = vm.get("amount", "");
            String label = vm.get("label", "");
            if (!amount.isEmpty()) {
                topUpAmountsList.add(new TopupAmount(amount, label));
            }
        }
    }

    /* ================= HELPERS ================= */
    private String normalizeTab(String raw) {
        if (raw == null) return "30days";
        raw = raw.toLowerCase();
        if (raw.contains("30")) return "30days";
        if (raw.contains("long")) return "long";
        if (raw.contains("data")) return "data";
        return "30days"; // default fallback
    }

    /* ================= GETTERS ================= */
    public String getTitle() { return title; }
    public String getDescription() { return description; }
    public String getOperatorTitle() { return operatorTitle; }
    public String getCountryCode() { return countryCode; }
    public String getPhonePlaceholder() { return phonePlaceholder; }
    public String getVerifyText() { return verifyText; }
    public String getPlansTitle() { return plansTitle; }
    public String getTopupTitle() { return topupTitle; }
    public String getPaymentTitle() { return paymentTitle; }
    public String getPaymentDescription() { return paymentDescription; }
    public String getFeeLabel() { return feeLabel; }
    public String getTermsText() { return termsText; }
    public String getCtaText() { return ctaText; }

    public Map<String, List<Plan>> getPlans() { return plansByTab; }
    public List<TopupAmount> getTopUpAmounts() { return topUpAmountsList; }

    /* ================= INNER CLASSES ================= */
    @Model(
        adaptables = {Resource.class, SlingHttpServletRequest.class},
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
    )
    public static class Plan {
        private final String data;
        private final String price;
        private final String validity;

        public Plan(String data, String price, String validity) {
            this.data = data;
            this.price = price;
            this.validity = validity;
        }

        public String getData() { return data; }
        public String getPrice() { return price; }
        public String getValidity() { return validity; }
    }

    public static class TopupAmount {
        private final String amount;
        private final String label;

        public TopupAmount(String amount, String label) {
            this.amount = amount;
            this.label = label;
        }

        public String getAmount() { return amount; }
        public String getLabel() { return label; }
    }
    
    @Override
public String getExportedType() {
    return RESOURCE_TYPE;
}

}